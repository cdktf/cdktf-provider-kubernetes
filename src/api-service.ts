// https://www.terraform.io/docs/providers/kubernetes/r/api_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#metadata ApiService#metadata}
  */
  readonly metadata: ApiServiceMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#spec ApiService#spec}
  */
  readonly spec: ApiServiceSpec[];
}
export interface ApiServiceMetadata {
  /**
  * An unstructured key value map stored with the api_service that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#annotations ApiService#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#generate_name ApiService#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the api_service. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#labels ApiService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the api_service, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#name ApiService#name}
  */
  readonly name?: string;
}

function apiServiceMetadataToTerraform(struct?: ApiServiceMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApiServiceSpecService {
  /**
  * Name is the name of the service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#name ApiService#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#namespace ApiService#namespace}
  */
  readonly namespace: string;
  /**
  * If specified, the port on the service that is hosting the service. Defaults to 443 for backward compatibility. Should be a valid port number (1-65535, inclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#port ApiService#port}
  */
  readonly port?: number;
}

function apiServiceSpecServiceToTerraform(struct?: ApiServiceSpecService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface ApiServiceSpec {
  /**
  * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#ca_bundle ApiService#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * Group is the API group name this server hosts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#group ApiService#group}
  */
  readonly group: string;
  /**
  * GroupPriorityMinimum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object. (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#group_priority_minimum ApiService#group_priority_minimum}
  */
  readonly groupPriorityMinimum: number;
  /**
  * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged. You should use the CABundle instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#insecure_skip_tls_verify ApiService#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean;
  /**
  * Version is the API version this server hosts. For example, `v1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#version ApiService#version}
  */
  readonly version: string;
  /**
  * VersionPriority controls the ordering of this API version inside of its group. Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is `kube-like`, it will sort above non `kube-like` version strings, which are ordered lexicographically. `Kube-like` versions start with a `v`, then are followed by a number (the major version), then optionally the string `alpha` or `beta` and another number (the minor version). These are sorted first by GA > `beta` > `alpha` (where GA is a version with no suffix such as `beta` or `alpha`), and then by comparing major version, then minor version. An example sorted list of versions: `v10`, `v2`, `v1`, `v11beta2`, `v10beta3`, `v3beta1`, `v12alpha1`, `v11alpha2`, `foo1`, `foo10`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#version_priority ApiService#version_priority}
  */
  readonly versionPriority: number;
  /**
  * service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html#service ApiService#service}
  */
  readonly service?: ApiServiceSpecService[];
}

function apiServiceSpecToTerraform(struct?: ApiServiceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    group: cdktf.stringToTerraform(struct!.group),
    group_priority_minimum: cdktf.numberToTerraform(struct!.groupPriorityMinimum),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
    version: cdktf.stringToTerraform(struct!.version),
    version_priority: cdktf.numberToTerraform(struct!.versionPriority),
    service: cdktf.listMapper(apiServiceSpecServiceToTerraform)(struct!.service),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html kubernetes_api_service}
*/
export class ApiService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/api_service.html kubernetes_api_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ApiServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_api_service',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ApiServiceMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: ApiServiceMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: ApiServiceSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: ApiServiceSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(apiServiceMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(apiServiceSpecToTerraform)(this._spec),
    };
  }
}
