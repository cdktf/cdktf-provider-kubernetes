// https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#metadata Endpoints#metadata}
  */
  readonly metadata: EndpointsMetadata[];
  /**
  * subset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#subset Endpoints#subset}
  */
  readonly subset?: EndpointsSubset[];
}
export interface EndpointsMetadata {
  /**
  * An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#annotations Endpoints#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#generate_name Endpoints#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#labels Endpoints#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the endpoints, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#name Endpoints#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the endpoints must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#namespace Endpoints#namespace}
  */
  readonly namespace?: string;
}

function endpointsMetadataToTerraform(struct?: EndpointsMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface EndpointsSubsetAddress {
  /**
  * The Hostname of this endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#hostname Endpoints#hostname}
  */
  readonly hostname?: string;
  /**
  * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#ip Endpoints#ip}
  */
  readonly ip: string;
  /**
  * Node hosting this endpoint. This can be used to determine endpoints local to a node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#node_name Endpoints#node_name}
  */
  readonly nodeName?: string;
}

function endpointsSubsetAddressToTerraform(struct?: EndpointsSubsetAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}

export interface EndpointsSubsetNotReadyAddress {
  /**
  * The Hostname of this endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#hostname Endpoints#hostname}
  */
  readonly hostname?: string;
  /**
  * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#ip Endpoints#ip}
  */
  readonly ip: string;
  /**
  * Node hosting this endpoint. This can be used to determine endpoints local to a node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#node_name Endpoints#node_name}
  */
  readonly nodeName?: string;
}

function endpointsSubsetNotReadyAddressToTerraform(struct?: EndpointsSubsetNotReadyAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}

export interface EndpointsSubsetPort {
  /**
  * The name of this port within the endpoint. Must be a DNS_LABEL. Optional if only one Port is defined on this endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#name Endpoints#name}
  */
  readonly name?: string;
  /**
  * The port that will be exposed by this endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#port Endpoints#port}
  */
  readonly port: number;
  /**
  * The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#protocol Endpoints#protocol}
  */
  readonly protocol?: string;
}

function endpointsSubsetPortToTerraform(struct?: EndpointsSubsetPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface EndpointsSubset {
  /**
  * address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#address Endpoints#address}
  */
  readonly address?: EndpointsSubsetAddress[];
  /**
  * not_ready_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#not_ready_address Endpoints#not_ready_address}
  */
  readonly notReadyAddress?: EndpointsSubsetNotReadyAddress[];
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html#port Endpoints#port}
  */
  readonly port?: EndpointsSubsetPort[];
}

function endpointsSubsetToTerraform(struct?: EndpointsSubset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.listMapper(endpointsSubsetAddressToTerraform)(struct!.address),
    not_ready_address: cdktf.listMapper(endpointsSubsetNotReadyAddressToTerraform)(struct!.notReadyAddress),
    port: cdktf.listMapper(endpointsSubsetPortToTerraform)(struct!.port),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html kubernetes_endpoints}
*/
export class Endpoints extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html kubernetes_endpoints} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_endpoints',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._subset = config.subset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: EndpointsMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: EndpointsMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: EndpointsSubset[];
  public get subset() {
    return this.interpolationForAttribute('subset') as any;
  }
  public set subset(value: EndpointsSubset[] ) {
    this._subset = value;
  }
  public resetSubset() {
    this._subset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(endpointsMetadataToTerraform)(this._metadata),
      subset: cdktf.listMapper(endpointsSubsetToTerraform)(this._subset),
    };
  }
}
