// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataKubernetesNamespaceConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: DataKubernetesNamespaceMetadata[];
}
export class DataKubernetesNamespaceSpec extends ComplexComputedList {

  // finalizers - computed: true, optional: false, required: true
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
}
export interface DataKubernetesNamespaceMetadata {
  /** An unstructured key value map stored with the namespace that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the namespace. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the namespace, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}

// Resource

export class DataKubernetesNamespace extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataKubernetesNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_namespace',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
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

  // spec - computed: true, optional: false, required: true
  public spec(index: string) {
    return new DataKubernetesNamespaceSpec(this, 'spec', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesNamespaceMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: DataKubernetesNamespaceMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
    };
  }
}
