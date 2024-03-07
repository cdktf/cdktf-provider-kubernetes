# `mutatingWebhookConfiguration` Submodule <a name="`mutatingWebhookConfiguration` Submodule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MutatingWebhookConfiguration <a name="MutatingWebhookConfiguration" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration kubernetes_mutating_webhook_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfiguration(Construct Scope, string Id, MutatingWebhookConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig">MutatingWebhookConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig">MutatingWebhookConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata"></a>

```csharp
private void PutMetadata(MutatingWebhookConfigurationMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook"></a>

```csharp
private void PutWebhook(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MutatingWebhookConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

MutatingWebhookConfiguration.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

MutatingWebhookConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

MutatingWebhookConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

MutatingWebhookConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MutatingWebhookConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MutatingWebhookConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MutatingWebhookConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MutatingWebhookConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference">MutatingWebhookConfigurationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList">MutatingWebhookConfigurationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhookInput">WebhookInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadata"></a>

```csharp
public MutatingWebhookConfigurationMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference">MutatingWebhookConfigurationMetadataOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhook"></a>

```csharp
public MutatingWebhookConfigurationWebhookList Webhook { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList">MutatingWebhookConfigurationWebhookList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadataInput"></a>

```csharp
public MutatingWebhookConfigurationMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhookInput"></a>

```csharp
public object WebhookInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MutatingWebhookConfigurationConfig <a name="MutatingWebhookConfigurationConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MutatingWebhookConfigurationMetadata Metadata,
    object Webhook,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.webhook">Webhook</a></code> | <code>object</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#id MutatingWebhookConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.metadata"></a>

```csharp
public MutatingWebhookConfigurationMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#metadata MutatingWebhookConfiguration#metadata}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.webhook"></a>

```csharp
public object Webhook { get; set; }
```

- *Type:* object

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#webhook MutatingWebhookConfiguration#webhook}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#id MutatingWebhookConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MutatingWebhookConfigurationMetadata <a name="MutatingWebhookConfigurationMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.name">Name</a></code> | <code>string</code> | Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#annotations MutatingWebhookConfiguration#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#generate_name MutatingWebhookConfiguration#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#labels MutatingWebhookConfiguration#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

### MutatingWebhookConfigurationWebhook <a name="MutatingWebhookConfigurationWebhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhook {
    MutatingWebhookConfigurationWebhookClientConfig ClientConfig,
    string Name,
    string[] AdmissionReviewVersions = null,
    string FailurePolicy = null,
    string MatchPolicy = null,
    MutatingWebhookConfigurationWebhookNamespaceSelector NamespaceSelector = null,
    MutatingWebhookConfigurationWebhookObjectSelector ObjectSelector = null,
    string ReinvocationPolicy = null,
    object Rule = null,
    string SideEffects = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.name">Name</a></code> | <code>string</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>string[]</code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.matchPolicy">MatchPolicy</a></code> | <code>string</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.reinvocationPolicy">ReinvocationPolicy</a></code> | <code>string</code> | reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.sideEffects">SideEffects</a></code> | <code>string</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.clientConfig"></a>

```csharp
public MutatingWebhookConfigurationWebhookClientConfig ClientConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#client_config MutatingWebhookConfiguration#client_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

##### `AdmissionReviewVersions`<sup>Optional</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.admissionReviewVersions"></a>

```csharp
public string[] AdmissionReviewVersions { get; set; }
```

- *Type:* string[]

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#admission_review_versions MutatingWebhookConfiguration#admission_review_versions}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; set; }
```

- *Type:* string

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#failure_policy MutatingWebhookConfiguration#failure_policy}

---

##### `MatchPolicy`<sup>Optional</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.matchPolicy"></a>

```csharp
public string MatchPolicy { get; set; }
```

- *Type:* string

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

* Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
* Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#match_policy MutatingWebhookConfiguration#match_policy}

---

##### `NamespaceSelector`<sup>Optional</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.namespaceSelector"></a>

```csharp
public MutatingWebhookConfigurationWebhookNamespaceSelector NamespaceSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#namespace_selector MutatingWebhookConfiguration#namespace_selector}

---

##### `ObjectSelector`<sup>Optional</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.objectSelector"></a>

```csharp
public MutatingWebhookConfigurationWebhookObjectSelector ObjectSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#object_selector MutatingWebhookConfiguration#object_selector}

---

##### `ReinvocationPolicy`<sup>Optional</sup> <a name="ReinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.reinvocationPolicy"></a>

```csharp
public string ReinvocationPolicy { get; set; }
```

- *Type:* string

reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation.

Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#reinvocation_policy MutatingWebhookConfiguration#reinvocation_policy}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#rule MutatingWebhookConfiguration#rule}

---

##### `SideEffects`<sup>Optional</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.sideEffects"></a>

```csharp
public string SideEffects { get; set; }
```

- *Type:* string

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#side_effects MutatingWebhookConfiguration#side_effects}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#timeout_seconds MutatingWebhookConfiguration#timeout_seconds}

---

### MutatingWebhookConfigurationWebhookClientConfig <a name="MutatingWebhookConfigurationWebhookClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookClientConfig {
    string CaBundle = null,
    MutatingWebhookConfigurationWebhookClientConfigService Service = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.caBundle">CaBundle</a></code> | <code>string</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.url">Url</a></code> | <code>string</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `CaBundle`<sup>Optional</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.caBundle"></a>

```csharp
public string CaBundle { get; set; }
```

- *Type:* string

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#ca_bundle MutatingWebhookConfiguration#ca_bundle}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.service"></a>

```csharp
public MutatingWebhookConfigurationWebhookClientConfigService Service { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#service MutatingWebhookConfiguration#service}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#url MutatingWebhookConfiguration#url}

---

### MutatingWebhookConfigurationWebhookClientConfigService <a name="MutatingWebhookConfigurationWebhookClientConfigService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookClientConfigService {
    string Name,
    string Namespace,
    string Path = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.name">Name</a></code> | <code>string</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.namespace">Namespace</a></code> | <code>string</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.path">Path</a></code> | <code>string</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.port">Port</a></code> | <code>double</code> | If specified, the port on the service that hosting webhook. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#namespace MutatingWebhookConfiguration#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#path MutatingWebhookConfiguration#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#port MutatingWebhookConfiguration#port}

---

### MutatingWebhookConfigurationWebhookNamespaceSelector <a name="MutatingWebhookConfigurationWebhookNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookNamespaceSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#match_expressions MutatingWebhookConfiguration#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#match_labels MutatingWebhookConfiguration#match_labels}

---

### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#key MutatingWebhookConfiguration#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#operator MutatingWebhookConfiguration#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#values MutatingWebhookConfiguration#values}

---

### MutatingWebhookConfigurationWebhookObjectSelector <a name="MutatingWebhookConfigurationWebhookObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookObjectSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#match_expressions MutatingWebhookConfiguration#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#match_labels MutatingWebhookConfiguration#match_labels}

---

### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#key MutatingWebhookConfiguration#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#operator MutatingWebhookConfiguration#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#values MutatingWebhookConfiguration#values}

---

### MutatingWebhookConfigurationWebhookRule <a name="MutatingWebhookConfigurationWebhookRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookRule {
    string[] ApiGroups,
    string[] ApiVersions,
    string[] Operations,
    string[] Resources,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#api_groups MutatingWebhookConfiguration#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#api_versions MutatingWebhookConfiguration#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.operations">Operations</a></code> | <code>string[]</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.resources">Resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#resources MutatingWebhookConfiguration#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#scope MutatingWebhookConfiguration#scope}. |

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#api_groups MutatingWebhookConfiguration#api_groups}.

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#api_versions MutatingWebhookConfiguration#api_versions}.

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.operations"></a>

```csharp
public string[] Operations { get; set; }
```

- *Type:* string[]

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#operations MutatingWebhookConfiguration#operations}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#resources MutatingWebhookConfiguration#resources}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration#scope MutatingWebhookConfiguration#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### MutatingWebhookConfigurationMetadataOutputReference <a name="MutatingWebhookConfigurationMetadataOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.internalValue"></a>

```csharp
public MutatingWebhookConfigurationMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---


### MutatingWebhookConfigurationWebhookClientConfigOutputReference <a name="MutatingWebhookConfigurationWebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookClientConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle">ResetCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutService` <a name="PutService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService"></a>

```csharp
private void PutService(MutatingWebhookConfigurationWebhookClientConfigService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `ResetCaBundle` <a name="ResetCaBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle"></a>

```csharp
private void ResetCaBundle()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput">CaBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle">CaBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.service"></a>

```csharp
public MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference Service { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a>

---

##### `CaBundleInput`<sup>Optional</sup> <a name="CaBundleInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput"></a>

```csharp
public string CaBundleInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput"></a>

```csharp
public MutatingWebhookConfigurationWebhookClientConfigService ServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `CaBundle`<sup>Required</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle"></a>

```csharp
public string CaBundle { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue"></a>

```csharp
public MutatingWebhookConfigurationWebhookClientConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---


### MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference <a name="MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue"></a>

```csharp
public MutatingWebhookConfigurationWebhookClientConfigService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---


### MutatingWebhookConfigurationWebhookList <a name="MutatingWebhookConfigurationWebhookList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get"></a>

```csharp
private MutatingWebhookConfigurationWebhookOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get"></a>

```csharp
private MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```csharp
public MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```csharp
public MutatingWebhookConfigurationWebhookNamespaceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---


### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get"></a>

```csharp
private MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MutatingWebhookConfigurationWebhookObjectSelectorOutputReference <a name="MutatingWebhookConfigurationWebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookObjectSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```csharp
public MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue"></a>

```csharp
public MutatingWebhookConfigurationWebhookObjectSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---


### MutatingWebhookConfigurationWebhookOutputReference <a name="MutatingWebhookConfigurationWebhookOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig">PutClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector">PutNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector">PutObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions">ResetAdmissionReviewVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy">ResetMatchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector">ResetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetObjectSelector">ResetObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetReinvocationPolicy">ResetReinvocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetSideEffects">ResetSideEffects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfig` <a name="PutClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig"></a>

```csharp
private void PutClientConfig(MutatingWebhookConfigurationWebhookClientConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---

##### `PutNamespaceSelector` <a name="PutNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector"></a>

```csharp
private void PutNamespaceSelector(MutatingWebhookConfigurationWebhookNamespaceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `PutObjectSelector` <a name="PutObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector"></a>

```csharp
private void PutObjectSelector(MutatingWebhookConfigurationWebhookObjectSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetAdmissionReviewVersions` <a name="ResetAdmissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions"></a>

```csharp
private void ResetAdmissionReviewVersions()
```

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy"></a>

```csharp
private void ResetFailurePolicy()
```

##### `ResetMatchPolicy` <a name="ResetMatchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy"></a>

```csharp
private void ResetMatchPolicy()
```

##### `ResetNamespaceSelector` <a name="ResetNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector"></a>

```csharp
private void ResetNamespaceSelector()
```

##### `ResetObjectSelector` <a name="ResetObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetObjectSelector"></a>

```csharp
private void ResetObjectSelector()
```

##### `ResetReinvocationPolicy` <a name="ResetReinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetReinvocationPolicy"></a>

```csharp
private void ResetReinvocationPolicy()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```

##### `ResetSideEffects` <a name="ResetSideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetSideEffects"></a>

```csharp
private void ResetSideEffects()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference">MutatingWebhookConfigurationWebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference">MutatingWebhookConfigurationWebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList">MutatingWebhookConfigurationWebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput">AdmissionReviewVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput">ClientConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput">MatchPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput">NamespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput">ObjectSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicyInput">ReinvocationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput">SideEffectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicy">MatchPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicy">ReinvocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffects">SideEffects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfig"></a>

```csharp
public MutatingWebhookConfigurationWebhookClientConfigOutputReference ClientConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference">MutatingWebhookConfigurationWebhookClientConfigOutputReference</a>

---

##### `NamespaceSelector`<sup>Required</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector"></a>

```csharp
public MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference NamespaceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a>

---

##### `ObjectSelector`<sup>Required</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelector"></a>

```csharp
public MutatingWebhookConfigurationWebhookObjectSelectorOutputReference ObjectSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference">MutatingWebhookConfigurationWebhookObjectSelectorOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.rule"></a>

```csharp
public MutatingWebhookConfigurationWebhookRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList">MutatingWebhookConfigurationWebhookRuleList</a>

---

##### `AdmissionReviewVersionsInput`<sup>Optional</sup> <a name="AdmissionReviewVersionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput"></a>

```csharp
public string[] AdmissionReviewVersionsInput { get; }
```

- *Type:* string[]

---

##### `ClientConfigInput`<sup>Optional</sup> <a name="ClientConfigInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput"></a>

```csharp
public MutatingWebhookConfigurationWebhookClientConfig ClientConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput"></a>

```csharp
public string FailurePolicyInput { get; }
```

- *Type:* string

---

##### `MatchPolicyInput`<sup>Optional</sup> <a name="MatchPolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput"></a>

```csharp
public string MatchPolicyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceSelectorInput`<sup>Optional</sup> <a name="NamespaceSelectorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput"></a>

```csharp
public MutatingWebhookConfigurationWebhookNamespaceSelector NamespaceSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `ObjectSelectorInput`<sup>Optional</sup> <a name="ObjectSelectorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput"></a>

```csharp
public MutatingWebhookConfigurationWebhookObjectSelector ObjectSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `ReinvocationPolicyInput`<sup>Optional</sup> <a name="ReinvocationPolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicyInput"></a>

```csharp
public string ReinvocationPolicyInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `SideEffectsInput`<sup>Optional</sup> <a name="SideEffectsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput"></a>

```csharp
public string SideEffectsInput { get; }
```

- *Type:* string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `AdmissionReviewVersions`<sup>Required</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions"></a>

```csharp
public string[] AdmissionReviewVersions { get; }
```

- *Type:* string[]

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; }
```

- *Type:* string

---

##### `MatchPolicy`<sup>Required</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicy"></a>

```csharp
public string MatchPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReinvocationPolicy`<sup>Required</sup> <a name="ReinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicy"></a>

```csharp
public string ReinvocationPolicy { get; }
```

- *Type:* string

---

##### `SideEffects`<sup>Required</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffects"></a>

```csharp
public string SideEffects { get; }
```

- *Type:* string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MutatingWebhookConfigurationWebhookRuleList <a name="MutatingWebhookConfigurationWebhookRuleList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get"></a>

```csharp
private MutatingWebhookConfigurationWebhookRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MutatingWebhookConfigurationWebhookRuleOutputReference <a name="MutatingWebhookConfigurationWebhookRuleOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new MutatingWebhookConfigurationWebhookRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput">ApiGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput">ApiVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput">OperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operations">Operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroupsInput`<sup>Optional</sup> <a name="ApiGroupsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput"></a>

```csharp
public string[] ApiGroupsInput { get; }
```

- *Type:* string[]

---

##### `ApiVersionsInput`<sup>Optional</sup> <a name="ApiVersionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput"></a>

```csharp
public string[] ApiVersionsInput { get; }
```

- *Type:* string[]

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput"></a>

```csharp
public string[] OperationsInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; }
```

- *Type:* string[]

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; }
```

- *Type:* string[]

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operations"></a>

```csharp
public string[] Operations { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



