// https://www.terraform.io/docs/providers/kubernetes/r/api_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiServiceConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: ApiServiceMetadata[];
  /** spec block */
  readonly spec: ApiServiceSpec[];
}
export interface ApiServiceMetadata {
  /** An unstructured key value map stored with the api_service that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the api_service. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the api_service, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface ApiServiceSpecService {
  /** Name is the name of the service. */
  readonly name: string;
  /** Namespace is the namespace of the service. */
  readonly namespace: string;
  /** If specified, the port on the service that is hosting the service. Defaults to 443 for backward compatibility. Should be a valid port number (1-65535, inclusive). */
  readonly port?: number;
}
export interface ApiServiceSpec {
  /** CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used. */
  readonly caBundle?: string;
  /** Group is the API group name this server hosts. */
  readonly group: string;
  /** GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object. (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s. */
  readonly groupPriorityMinimum: number;
  /** InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged. You should use the CABundle instead. */
  readonly insecureSkipTlsVerify?: boolean;
  /** Version is the API version this server hosts. For example, `v1`. */
  readonly version: string;
  /** VersionPriority controls the ordering of this API version inside of its group. Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is `kube-like`, it will sort above non `kube-like` version strings, which are ordered lexicographically. `Kube-like` versions start with a `v`, then are followed by a number (the major version), then optionally the string `alpha` or `beta` and another number (the minor version). These are sorted first by GA > `beta` > `alpha` (where GA is a version with no suffix such as `beta` or `alpha`), and then by comparing major version, then minor version. An example sorted list of versions: `v10`, `v2`, `v1`, `v11beta2`, `v10beta3`, `v3beta1`, `v12alpha1`, `v11alpha2`, `foo1`, `foo10`. */
  readonly versionPriority: number;
  /** service block */
  readonly service?: ApiServiceSpecService[];
}

// Resource

export class ApiService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ApiServiceMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: ApiServiceMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: ApiServiceSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: ApiServiceSpec[]) {
    this._spec = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      spec: this._spec,
    };
  }
}
