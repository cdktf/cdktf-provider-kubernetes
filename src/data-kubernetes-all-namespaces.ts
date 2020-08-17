// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_all_namespaces.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataKubernetesAllNamespacesConfig extends TerraformMetaArguments {
}

// Resource

export class DataKubernetesAllNamespaces extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataKubernetesAllNamespacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_all_namespaces',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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

  // namespaces - computed: true, optional: false, required: true
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
