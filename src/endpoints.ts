// https://www.terraform.io/docs/providers/kubernetes/r/endpoints.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EndpointsConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: EndpointsMetadata[];
  /** subset block */
  readonly subset?: EndpointsSubset[];
}
export interface EndpointsMetadata {
  /** An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the endpoints, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the endpoints must be unique. */
  readonly namespace?: string;
}
export interface EndpointsSubsetAddress {
  /** The Hostname of this endpoint. */
  readonly hostname?: string;
  /** The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). */
  readonly ip: string;
  /** Node hosting this endpoint. This can be used to determine endpoints local to a node. */
  readonly nodeName?: string;
}
export interface EndpointsSubsetNotReadyAddress {
  /** The Hostname of this endpoint. */
  readonly hostname?: string;
  /** The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). */
  readonly ip: string;
  /** Node hosting this endpoint. This can be used to determine endpoints local to a node. */
  readonly nodeName?: string;
}
export interface EndpointsSubsetPort {
  /** The name of this port within the endpoint. Must be a DNS_LABEL. Optional if only one Port is defined on this endpoint. */
  readonly name?: string;
  /** The port that will be exposed by this endpoint. */
  readonly port: number;
  /** The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. */
  readonly protocol?: string;
}
export interface EndpointsSubset {
  /** address block */
  readonly address?: EndpointsSubsetAddress[];
  /** not_ready_address block */
  readonly notReadyAddress?: EndpointsSubsetNotReadyAddress[];
  /** port block */
  readonly port?: EndpointsSubsetPort[];
}

// Resource

export class Endpoints extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: EndpointsMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: EndpointsMetadata[]) {
    this._metadata = value;
  }

  // subset - computed: false, optional: true, required: false
  private _subset?: EndpointsSubset[];
  public get subset() {
    return this._subset;
  }
  public set subset(value: EndpointsSubset[] | undefined) {
    this._subset = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      subset: this._subset,
    };
  }
}
